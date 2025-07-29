import { SocialButton } from "@/registry/new-york-v4/ui/social-button"

export default function SocialButtonGroupIconsBrandDemo() {
  return (
    <div className="grid w-90 grid-cols-3 gap-3">
      <SocialButton social="google" variant="google" theme="brand" />
      <SocialButton social="facebook" variant="facebook" theme="brand" />
      <SocialButton social="apple" variant="apple" theme="brand" />
    </div>
  )
}
