import { SocialButton } from "@/registry/new-york-v4/ui/social-button"

export default function SocialButtonAppleDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8">
        <SocialButton social="apple" variant="apple" theme="brand">
          Sign in with Apple
        </SocialButton>
        <SocialButton social="apple" variant="apple" theme="brand" />
      </div>
      <div className="flex gap-8">
        <SocialButton social="apple" variant="apple" theme="outline">
          Sign in with Apple
        </SocialButton>
        <SocialButton social="apple" variant="apple" theme="outline" />
      </div>
      <div className="flex gap-8">
        <SocialButton social="apple" variant="apple" theme="ghost">
          Sign in with Apple
        </SocialButton>
        <SocialButton social="apple" variant="apple" theme="ghost" />
      </div>
    </div>
  )
}
