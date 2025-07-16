import { SocialButton } from "@/registry/new-york-v4/ui/social-button";

export default function SocialButtonGroupColorDemo() {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" variant="google" theme="outline">
                Sign in with Google
            </SocialButton>
            <SocialButton social="facebook" variant="facebook" theme="outline">
                Sign in with Facebook
            </SocialButton>
            <SocialButton social="apple" variant="apple" theme="outline">
                Sign in with Apple
            </SocialButton>
        </div>
    );
};