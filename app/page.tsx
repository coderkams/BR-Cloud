import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/bgcloud.svg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Logo at top-right */}
      <div className="absolute top-4 left-4 z-10">
        <Image src="/assets/br-logo.svg" alt="BR CLOUD Logo" width={80} height={40} />
      </div>

      {/* Main Content */}
      <div className="z-10 flex w-full max-w-5xl mx-auto items-center justify-between gap-8 px-4">
        {/* Left Side - Login Form */}
        <Card className="w-[500px] h-[480px] bg-white shadow-2xl p-8">
    <CardHeader className="space-y-1 text-left">
      <CardTitle className="text-2xl font-bold text-[#000000B2]">
        Set up a virtual machine
      </CardTitle>
    </CardHeader>
    <CardContent>
      <form className="space-y-4">
        <div className="space-y-2">
          <Input type="email" placeholder="Email"  />
        </div>
        <div className="space-y-2">
          <Input type="password" placeholder="Password"  />
        </div>
        <Link href="/vm-setup/step1" className="w-full block mt-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Login
          </Button>
        </Link>
      </form>
    </CardContent>
  </Card>
      </div>
    </div>
  )
}
