import Navbar from '../components/Navbar';
import PageWrapper from '../components/layout/PageWrapper';
import PageTitle from '../components/ui/PageTitle';
import PublicationsList from '../components/publications/PublicationsList';
import MediumBlogCard from '../components/publications/MediumBlogCard';

export default function Publications() {
  return (
    <main>
      <Navbar />
      <PageWrapper>
        <PageTitle>Publications</PageTitle>
        <div className="max-w-4xl mx-auto">
          <MediumBlogCard />
          <PublicationsList />
        </div>
      </PageWrapper>
    </main>
  );
}