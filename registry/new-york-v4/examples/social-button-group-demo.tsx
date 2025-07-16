import { SocialButton } from "@/registry/new-york-v4/ui/social-button";
 
export default function SocialButtonGroupBrandDemo() {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" variant="google" theme="brand">
                Sign in with Google
            </SocialButton>
            <SocialButton social="facebook" variant="facebook" theme="brand">
                Sign in with Facebook
            </SocialButton>
            <SocialButton social="apple" variant="apple" theme="brand">
                Sign in with Apple
            </SocialButton>
        </div>
    );
};

