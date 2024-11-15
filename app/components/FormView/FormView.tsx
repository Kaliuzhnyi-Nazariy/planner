type Props = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormView = ({ children, onSubmit }: Props) => {
  return (
    <form
      className="flex flex-col items-center gap-3 bg-auth-background text-slate-900 p-3 min-[420px]:w-96 rounded-2xl"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default FormView;
