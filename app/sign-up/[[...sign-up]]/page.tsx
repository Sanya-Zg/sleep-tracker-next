import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-amethyst-500 to-blue-900">
        <SignUp />
      </div>
    );
}
