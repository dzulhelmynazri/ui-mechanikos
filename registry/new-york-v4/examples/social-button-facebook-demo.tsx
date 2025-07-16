import { SocialButton } from "@/registry/new-york-v4/ui/social-button";

export default function SocialButtonFacebookDemo() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="facebook" variant="facebook" theme="brand">
                    Sign in with Facebook
                </SocialButton>
                <SocialButton social="facebook" variant="facebook" theme="brand" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="facebook" variant="facebook" theme="outline">
                    Sign in with Facebook
                </SocialButton>
                <SocialButton social="facebook" variant="facebook" theme="outline" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="facebook" variant="facebook" theme="ghost">
                    Sign in with Facebook
                </SocialButton>
                <SocialButton social="facebook" variant="facebook" theme="ghost" />
            </div>
        </div>
    );
};