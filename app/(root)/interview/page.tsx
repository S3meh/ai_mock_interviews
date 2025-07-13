import Agent from '@/components/Agent';
import { getCurrentUser } from '@/lib/actions/auth.action';

// ⬅️ This line is essential to avoid build-time errors
export const dynamic = 'force-dynamic';

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
};

export default Page;
