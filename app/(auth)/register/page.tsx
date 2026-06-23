"use client";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="w-full p-12 flex flex-col h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-primary mb-4">Register</h1>
        <p className="text-sm">
          Already have account?{" "}
          <Link className="underline text-blue-600" href={"/login"}>
            Login here!
          </Link>
        </p>
      </div>

      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="username" type="text">
            <Label>Username</Label>
            <Input className="rounded" placeholder="example123"/>
                      <FieldError />

        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input className="rounded" placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type={isVisible ? "text" : "password"}
                  validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
        >
          <Label>Password</Label>
          <Input className="rounded" placeholder="Enter your password" />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
                     <Checkbox
          name="show-pass"
          isSelected={isVisible}
          onChange={toggleVisibility}
        >
          <Checkbox.Content className="flex flex-row items-center gap-2 text-sm mt-2">
            <Checkbox.Control className="rounded-sm before:rounded-sm" >
              <Checkbox.Indicator/>
            </Checkbox.Control>
            Show Password
          </Checkbox.Content>
        </Checkbox>
        </TextField>
          <Button type="submit" className="bg-primary hover:bg-primary-500 rounded w-full shadow">Register</Button>
      </Form>
    </div>
  );
}
