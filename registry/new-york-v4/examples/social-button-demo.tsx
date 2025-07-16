import { SocialButton } from "@/registry/new-york-v4/ui/social-button"

export default function SocialButtonDemo() {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" variant="google">
                Sign in with Google
            </SocialButton>
            <SocialButton social="facebook" variant="facebook">
                Sign in with Facebook
            </SocialButton>
            <SocialButton social="apple" variant="apple">
                Sign in with Apple
            </SocialButton>
        </div>
    );
};