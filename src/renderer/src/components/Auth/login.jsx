import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useState } from 'react'
import LoadingOverlay from '../ui/loadingOverlay'

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    console.log(data)
  }
  return (
    <div className="flex justify-center items-center h-dvh">
      <Card className="mx-auto max-w-sm relative overflow-hidden ">
        {isLoading && <LoadingOverlay />}
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register('email', {
                  required: true
                })}
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                {...register('password', {
                  required: true
                })}
                id="password"
                type="password"
                placeholder={'Enter your password'}
                required
              />
            </div>
            <Button onClick={handleSubmit(onSubmit)} type="submit" className="w-full">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
