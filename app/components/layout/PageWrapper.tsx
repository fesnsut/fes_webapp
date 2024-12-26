interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  );
}