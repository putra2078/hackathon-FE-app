import { Alert, CloseButton, Spinner } from "@heroui/react";

interface ErrorAlert {
  desc: string | null;
  clearError: () => void;
  title: string
}

export function ErrorAlert({ desc, clearError, title }: ErrorAlert) {
  return (
    <div className="top-4 right-4 fixed z-999">
      <Alert status="danger" className="rounded-sm">
        <Alert.Content>
          <Alert.Title>{title}</Alert.Title>
          <Alert.Description>{desc}</Alert.Description>
        </Alert.Content>
        <CloseButton onPress={clearError} />
      </Alert>
    </div>
  );
}

export function LoadingAlert({title, desc}) {
  return (
    <div className="top-4 right-4 fixed z-999">
      <Alert status="accent" className="rounded-sm">
        <Alert.Indicator>
          <Spinner size="sm" />
        </Alert.Indicator>
        <Alert.Content>
          <Alert.Title>{title}</Alert.Title>
          <Alert.Description>
            {desc}
          </Alert.Description>
        </Alert.Content>
      </Alert>
    </div>
  );
}

export function SuccessAlert({title, clear}) {
  return (
    <div className="top-4 right-4 fixed z-999">
            <Alert status="success" className="rounded">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>{title}</Alert.Title>
        </Alert.Content>
        <CloseButton onPress={clear}/>
      </Alert>
    </div>
  );
}

