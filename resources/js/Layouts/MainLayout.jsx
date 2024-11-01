import { Head } from '@inertiajs/react';
import Loader from '../Components/Loader';
import Topbar from '../Components/Topbar';
im


export default function MainLayout({ title, children }) {
  return (
    <>
      <Head title={title} />
          <Loader />
          <Topbar />
              {children}

    </>
  );
}
