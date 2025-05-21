import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function VMSetupFinal() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      <header className="w-full bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="w-24 h-10 relative">
            <Image src="/assets/br-logo.svg" alt="BR Logo" fill className="object-contain" priority />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="w-full max-w-3xl mx-auto bg-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-black">Set up your virtual machine</CardTitle>
            <CardDescription>Provide VM Configuration Details</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6 bg-green-50 border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800">Success!</AlertTitle>
              <AlertDescription className="text-green-700">
                Your virtual machine is being created. This may take a few minutes.
              </AlertDescription>
            </Alert>

            <form className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Enter DNS Server" disabled />
              </div>
              <div className="space-y-2">
                <Input placeholder="Enter subnet netmask/CIDR" disabled />
              </div>

              <div className="flex justify-end">
                <Link href="/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700">Go to Dashboard</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
