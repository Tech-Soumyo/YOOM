import { SignIn } from "@clerk/nextjs";

const SigninPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center text-white bg">
      <SignIn
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      />
    </div>
  );
};
export default SigninPage;
