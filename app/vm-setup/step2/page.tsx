import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VMSetupStep2() {
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
        <Card className="w-full max-w-3xl mx-auto  bg-white border-none shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-[#000000B2]">Set up your virtual machine</CardTitle>
            <CardDescription>Provide VM Configuration Details</CardDescription>
          </CardHeader>
          <CardContent>
              <form className="space-y-4 bg-white">
                    <div className="space-y-2">
                      <Input className="bg-white placeholder-gray-400 text-black" placeholder="Enter DNS Server" />
                    </div>
                    <div className="space-y-2">
                      <Input className="bg-white placeholder-gray-400 text-black" placeholder="Enter subnet netmask/CIDR" />
                    </div>
                    <div className="space-y-2">
                      <Input className="bg-white placeholder-gray-400 text-black" type="password" placeholder="Password" />
                    </div>
                    <div className="space-y-2">
                      <Input className="bg-white placeholder-gray-400 text-black" placeholder="Enter host name for VM" />
                    </div>
                    <div className="space-y-2">
                      <Input className="bg-white placeholder-gray-400 text-black" placeholder="Duration" />
                    </div>
                    <div className="space-y-2">
                      <Input className="bg-white placeholder-gray-400 text-black" placeholder="Description" />
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-gray-500 mb-2">Language</p>

                      <Select defaultValue="en">
                        <SelectTrigger className="bg-white text-black border border-gray-300">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex justify-end">
                      <Link href="/vm-setup/final">
                        <Button className="bg-blue-600 hover:bg-blue-700">Create server</Button>
                      </Link>
                    </div>
                  </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
