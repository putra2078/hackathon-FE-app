import { Alert, CloseButton, Spinner } from "@heroui/react";



interface AlertProps{
  title: string
  desc?: string
}

interface AlertWithClearProps extends AlertProps {
  clearAlert: () => void;
}

export function ErrorAlert({ desc, clearAlert, title }: AlertWithClearProps) {
  return (
    <div className="top-4 right-4 fixed z-999">
      <Alert status="danger" className="rounded-sm">
        <Alert.Content>
          <Alert.Title>{title}</Alert.Title>
          <Alert.Description>{desc}</Alert.Description>
        </Alert.Content>
        <CloseButton onPress={clearAlert} />
      </Alert>
    </div>
  );
}

export function LoadingAlert({title, desc}: AlertProps) {
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

export function SuccessAlert({title, clearAlert}: AlertWithClearProps) {
  return (
    <div className="top-4 right-4 fixed z-999">
            <Alert status="success" className="rounded">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>{title}</Alert.Title>
        </Alert.Content>
        <CloseButton onPress={clearAlert}/>
      </Alert>
    </div>
  );
}

