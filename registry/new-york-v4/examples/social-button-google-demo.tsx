import { SocialButton } from "@/registry/new-york-v4/ui/social-button";

export default function SocialButtonGoogleDemo() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="google" variant="google">
                    Sign in with Google
                </SocialButton>
                <SocialButton social="google" variant="google" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="google" variant="google" theme="ghost">
                    Sign in with Google
                </SocialButton>
                <SocialButton social="google" variant="google" theme="ghost" />
            </div>
        </div>
    );
};