import React, { useState } from 'react';
import { Title, TextField, Select, Checkbox, Button } from '@components/atoms';
import { LayoutDefault } from '@components/templates';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SignUpClientInput, useSignUpClientMutation } from '@ctypes/graphql';
import { toast } from 'react-toastify';
import ip from 'ip'
const companySizeOptions = [
  {
    name: 'Company Size..',
    value: '',
  },
  {
    name: 'Individual',
    value: 0,
  },
  {
    name: '1-10',
    value: 1,
  },
  {
    name: '10-50',
    value: 2,
  },
  {
    name: '50-250',
    value: 3,
  },
  {
    name: '250-1000',
    value: 4,
  },
  {
    name: '1000+',
    value: 5,
  },
];
type formData = SignUpClientInput & {
  acceptAgreement: boolean;
};
const signUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [signUpClient] = useSignUpClientMutation();

  const onSubmit = async (formData: formData) => {
    setLoading(true);
    try {
      const { acceptAgreement, ...data } = formData;
      await signUpClient({
        variables: {
          signUpClientInput: {
            ipAddress: ip.address(),
            ...data,
          },
        },
      });
      toast.success('Check your email');
      setTimeout(() => router.push('/auth/signin'), 3000);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return (
    <form className="max-w-5xl section-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-10 card section-container">
        <div className="flex flex-col gap-10 sm:flex-row">
          <div className="flex flex-col space-y-5 basis-2/5">
            <Title level="h4" text="Sign up for a gree 14-day trial with Ghost Inspector" />
            <p>
              We provide a 14-day free trial with no commitment! All of our premium features are included. Get
              started right away running tests and inviting team members.
            </p>
            <p>
              <span>Already have an account?</span>{' '}
              <Link href="/auth/signin">
                <a className="font-bold">Sign in</a>
              </Link>
            </p>
          </div>
          <div className="flex flex-col space-y-5 basis-3/5">
            <div>
              <label>Full Name</label>
              <div className="grid grid-cols-1 gap-5 mt-3 sm:grid-cols-2">
                <TextField
                  placeholder="First name"
                  {...register('firstName', { required: 'Required' })}
                  error={errors.firstName?.message}
                />
                <TextField
                  placeholder="Last name"
                  {...register('lastName', { required: 'Required' })}
                  error={errors.lastName?.message}
                />
              </div>
            </div>

            <TextField
              label="Company Name"
              placeholder="Company Name"
              error={errors.companyName?.message}
              {...register('companyName', { required: 'Required' })}
            />
            <Select
              label="Company Size"
              options={companySizeOptions}
              {...register('companySize', { required: 'Required', valueAsNumber: true })}
              error={errors.companySize?.message}
            />
            <TextField
              label="Position"
              placeholder="Ex: QA Engineer"
              error={errors.position?.message}
              {...register('position', { required: 'Required' })}
            />
            <TextField
              type="email"
              label="E-mail Address"
              placeholder="E-mail Address"
              error={errors.email?.message}
              {...register('email', { required: 'Required' })}
            />
            <TextField
              label="Password"
              placeholder="Must be a least 8 characters"
              error={errors.password?.message}
              type="password"
              {...register('password', { required: 'Required' })}
            />
            <Checkbox
              label="I agree to the Terms of Service and Privacy Policy."
              error={errors.acceptAgreement?.message}
              {...register('acceptAgreement', { required: 'Required' })}
            />
            <Button label="Create account" loading={loading} />
          </div>
        </div>
      </div>
    </form>
  );
};

signUp.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default signUp;
