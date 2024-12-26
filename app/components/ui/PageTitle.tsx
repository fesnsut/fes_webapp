interface PageTitleProps {
  children: React.ReactNode;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
      {children}
    </h1>
  );
}