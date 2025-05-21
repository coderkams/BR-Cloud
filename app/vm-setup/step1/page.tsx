import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VMSetupStep1() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50"
    style={{
        background: "linear-gradient(to bottom, #F6FBFA80, #C8E9EB4D, #99D6DD66)",
      }}
    >
      <header className="w-full bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="w-24 h-10 relative">
            <Image src="/assets/br-logo.svg" alt="BR Logo" fill className="object-contain" priority />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
    
         <Card className="w-full max-w-3xl mx-auto bg-white border-none shadow-none">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-[#000000B2]">Set up your virtual machine</CardTitle>
              <CardDescription>Provide VM Configuration Details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="OS (Ubuntu or Debian)" className="bg-white text-black" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Username" className="bg-white text-black" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="VCPU" className="bg-white text-black" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="RAM" className="bg-white text-black" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Storage" className="bg-white text-black" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Enter gateway address" className="bg-white text-black" />
                </div>
                <div className="flex justify-end">
                  <Link href="/vm-setup/step2">
                    <Button className="bg-blue-600 hover:bg-blue-700">NEXT</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

      </main>
    </div>
  )
}
