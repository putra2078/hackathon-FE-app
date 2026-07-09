"use client";
import { useLogin } from "@/hooks/useLogin";
import {
  Button,
  Checkbox,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div className="w-full p-12 flex flex-col h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-primary mb-4">Login</h1>
        <p className="text-sm">
          Belum punya akun?{" "}
          <Link className="underline text-blue-600" href={"/register"}>
            Daftar di sini!
          </Link>
        </p>
      </div>

      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Masukkan email yang valid";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input
            className="rounded"
            placeholder="budi@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="password"
          type={isVisible ? "text" : "password"}
        >
          <Label>Password</Label>

          <Input
            className="rounded"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FieldError />
          <Checkbox
            name="show-pass"
            isSelected={isVisible}
            onChange={toggleVisibility}
          >
            <Checkbox.Content className="flex flex-row items-center gap-2 text-sm mt-2">
              <Checkbox.Control className="rounded-sm before:rounded-sm">
                <Checkbox.Indicator />
              </Checkbox.Control>
              Tampilkan Password
            </Checkbox.Content>
          </Checkbox>
        </TextField>
        {error && <p className="text-red-300">{error}</p>}
        <Button
          isDisabled={isLoading}
          type="submit"
          className="bg-primary hover:bg-primary-500 rounded w-full shadow"
        >
          {isLoading ? "Masuk..." : "Login"}
        </Button>
      </Form>
    </div>
  );
}
