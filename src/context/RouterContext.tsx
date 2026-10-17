import React, { createContext, useContext, useEffect, useState } from 'react';

export type RoutePath = '/' | '/about' | '/reviews' | '/appointment' | string;

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

interface RouterProviderProps {
  children: React.ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname || '/';
      return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
    }
    return '/';
  });

  const navigate = (to: string) => {
    const normalized = to.length > 1 && to.endsWith('/') ? to.slice(0, -1) : to;
    if (normalized === currentPath) return;

    window.history.pushState({}, '', normalized);
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      const normalized = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
      setCurrentPath(normalized);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<LinkProps> = ({
  to,
  className = '',
  activeClassName = '',
  children,
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter();
  const normalizedTo = to.length > 1 && to.endsWith('/') ? to.slice(0, -1) : to;
  const isActive = currentPath === normalizedTo;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If default not prevented and not modifier click (Ctrl/Cmd)
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey
    ) {
      e.preventDefault();
      navigate(to);
    }
  };

  const combinedClass = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a
      href={to}
      onClick={handleClick}
      className={combinedClass}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
};
