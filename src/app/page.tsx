"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Eye,
  EyeOff,
  Rocket,
  Settings,
  User,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArgoLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate login logic
      if (username === "admin" && password === "password") {
        router.push("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-40 animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Argo Logo */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
        <h1 className="text-xl sm:text-2xl font-bold text-orange-500 drop-shadow-lg">
          argo
        </h1>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Let's get stuff{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                  deployed!
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Welcome to Argo CD - GitOps continuous delivery for Kubernetes
              </p>
            </div>

            {/* Octopus illustration */}
            <div className="hidden lg:flex justify-center lg:justify-start ">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 350"
                  fill="none"
                  className="w-full h-full drop-shadow-2xl"
                >
                  <path
                    d="M88.1706 203.918c-15.1789-6.575-25.7981-21.689-25.7981-39.284 0-16.452 9.2841-30.735 22.8988-37.896-.944-37.611 29.2987-68.7175 67.0337-68.7175s67.978 31.1066 67.034 68.7175c13.614 7.161 22.898 21.444 22.898 37.896 0 17.595-10.619 32.709-25.798 39.284l-2.477 65.83c.709 17.04 5.847 18.453 25.176 23.768 1.865.513 3.862 1.062 6 1.665-15.921 3.639-25.922 4.14-32.218 2.24l-1.144 30.397c-2.553 28.73-2.297 28.797 17.096 33.844 2.636.686 5.627 1.464 9.013 2.419-41.756 9.544-42.3-9.368-42.791-26.471-.098-3.417-.195-6.761-.617-9.792h-1.556c-.093 1.151-.185 2.268-.273 3.354l-.002.027c-1.948 23.92-2.617 32.129 1.139 35.75 1.962 1.892 5.132 2.53 9.959 3.503 5.047 1.016 11.905 2.398 21.087 5.958-49.237 6.856-49.199-8.783-49.135-35.41.01-4.143.02-8.551-.154-13.182h-1.478c-2.282 51.329.37 51.979 17.83 56.263 4.743 1.163 10.579 2.595 17.707 5.384-50.176 5.575-52.184-8.683-55.276-30.648-.548-3.891-1.13-8.024-2.02-12.332-.89 4.308-1.472 8.44-2.02 12.331-3.093 21.965-5.1 36.224-55.2757 30.649 7.1277-2.789 12.9637-4.221 17.7067-5.384 17.46-4.284 20.112-4.934 17.83-56.263h-1.478c-.174 4.631-.164 9.039-.154 13.182.064 26.627.102 42.266-49.1352 35.41 9.1819-3.56 16.0399-4.942 21.0872-5.958 4.827-.973 7.997-1.611 9.959-3.503 3.756-3.621 3.087-11.83 1.139-35.75-.089-1.093-.181-2.22-.275-3.381h-1.556c-.422 3.031-.519 6.375-.617 9.792-.491 17.103-1.035 36.015-42.7907 26.471 3.3855-.955 6.3761-1.733 9.013-2.419 19.3926-5.047 19.649-5.114 17.0952-33.844l-1.144-30.397c-6.2952 1.9-16.2963 1.399-32.2181-2.24 2.1382-.603 4.1354-1.152 6.0006-1.665 19.3291-5.315 24.4667-6.728 25.176-23.768z"
                    fill="#ef7b4d"
                  />
                  <circle cx="102.987" cy="165.36" r="31.9115" fill="#fefefe" />
                  <circle cx="102.262" cy="160.282" r="10.8789" fill="#000" />
                  <circle cx="197.271" cy="165.36" r="31.9115" fill="#fefefe" />
                  <circle cx="196.546" cy="160.282" r="10.8789" fill="#000" />
                  <path
                    d="M127.646 224.831s11.604 11.604 24.659 11.604 24.659-11.604 24.659-11.604v14.505c0 13.619-11.04 24.659-24.659 24.659-13.619 0-24.659-11.04-24.659-24.659z"
                    fill="#fafafa"
                  />
                  <path
                    d="M127.646 236.435s11.604 11.604 24.659 11.604 24.659-11.604 24.659-11.604v2.901c0 13.619-11.04 24.659-24.659 24.659-13.619 0-24.659-11.04-24.659-24.659z"
                    fill="#202124"
                  />
                  <path
                    d="M59.4453 215.163c-14.4242-19.164-23.0149-42.976-23.1213-68.806-.1714-41.626 21.7345-78.1924 54.7143-98.6031"
                    stroke="#5e6294"
                    strokeLinecap="round"
                    strokeWidth="8.70314"
                    opacity=".16"
                  />
                  <circle
                    cx="105.888"
                    cy="37.7137"
                    r="5.80209"
                    fill="#5e6294"
                    opacity=".45"
                  />
                  <rect
                    x="0"
                    y="113.141"
                    width="13.0547"
                    height="66.7241"
                    rx="5.80209"
                    fill="#5e6294"
                  />
                  <rect
                    x="290.105"
                    y="113.141"
                    width="13.0547"
                    height="66.7241"
                    rx="5.80209"
                    fill="#5e6294"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M151.58 291.555c80.511 0 145.777-65.267 145.777-145.777 0-80.5111-65.266-145.778-145.777-145.778s-145.77788 65.2669-145.77788 145.778c0 80.51 65.26688 145.777 145.77788 145.777zm0-7.252c76.505 0 138.525-62.02 138.525-138.525 0-76.5055-62.02-138.52525-138.525-138.52525-76.5056 0-138.5253 62.01975-138.5253 138.52525 0 76.505 62.0197 138.525 138.5253 138.525z"
                    fill="#5e6294"
                    fillOpacity=".2"
                  />
                  <path
                    d="M136.997 90.7907c-1.458 6.8223-7.382 11.3393-13.232 10.0893-5.851-1.2502-9.602-6.7115-8.144-13.5338 1.458-6.8222 10.374-14.0697 16.224-12.8196 5.851 1.2502 6.61 9.4419 5.152 16.2641z"
                    fill="#f77f4f"
                  />
                </svg>
              </div>
            </div>

            {/* Features */}
            <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5">
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-200">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  GitOps
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-200">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Kubernetes
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-200">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Multi-tenant
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader className="space-y-2 pb-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-white">
                  Sign In
                </CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  Enter your credentials to access Argo CD
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-6">
                  {error && (
                    <div className="flex items-center space-x-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm animate-in slide-in-from-top-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="space-y-3">
                    <Label
                      htmlFor="username"
                      className="text-white text-sm sm:text-base font-medium"
                    >
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-orange-400 focus:ring-orange-400/50 h-11 sm:h-12 text-sm sm:text-base transition-all duration-200 hover:bg-white/15"
                      placeholder="Enter your username"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="password"
                      className="text-white text-sm sm:text-base font-medium"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-orange-400 focus:ring-orange-400/50 h-11 sm:h-12 text-sm sm:text-base pr-12 transition-all duration-200 hover:bg-white/15"
                        placeholder="Enter your password"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-slate-400 hover:text-white cursor-pointer transition-colors disabled:cursor-not-allowed"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                        ) : (
                          <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 sm:py-4 text-sm sm:text-lg rounded-lg transition-all duration-200 active:scale-95 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Signing In...</span>
                      </div>
                    ) : (
                      "SIGN IN"
                    )}
                  </Button>
                </form>

                <div className="text-center text-sm sm:text-base text-slate-400">
                  Need help?{" "}
                  <a
                    href="#"
                    className="text-orange-400 hover:text-orange-300 underline transition-colors"
                  >
                    Contact support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </div>
  );
}
