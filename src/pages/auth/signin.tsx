import React, { useState, } from 'react';
import { Title, TextField, Button } from '@components/atoms';
import { LayoutDefault } from '@components/templates';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SignInInput } from '@ctypes/graphql';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';

type formData = SignInInput & {
  acceptAgreement: boolean;
};
const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData: formData) => {
    setLoading(true);
    try {
      await signIn('credentials', { ...formData, callbackUrl: '/dashboard' });
      setTimeout(() => router.push('/auth/dashboard'), 3000);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return (
    <form className="max-w-4xl section-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-10 card section-container">
        <div className="flex flex-col gap-10 sm:flex-row">
          <div className="flex flex-col space-y-5 basis-2/5">
            <Title level="h4" text="Sign in to Ghost Inspector" />
            <p>
              Don't have an account?{' '}
              <Link href="/auth/signup">
                <a className="font-bold">Sign up</a>
              </Link>{' '}
              for a free trial. If you're having trouble signin in,{' '}
              <Link href="/auth/recover">
                <a className="font-bold">reset your password</a>
              </Link>
            </p>
          </div>
          <div className="flex flex-col space-y-5 basis-3/5">
            <TextField
              type="email"
              label="E-mail Address"
              placeholder="E-mail Address"
              error={errors.email?.message}
              {...register('email', { required: 'Required' })}
            />

            <TextField
              type="password"
              label="Password"
              placeholder="Must be a least 8 characters"
              error={errors.password?.message}
              {...register('password', { required: 'Required' })}
            />

            <Button label="Sign in" loading={loading} />
          </div>
        </div>
      </div>
    </form>
  );
};

login.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default login;
