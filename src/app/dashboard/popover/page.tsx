import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
  PopoverTitle,
  PopoverDescription,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Title</PopoverTitle>
            <PopoverDescription>Description text here.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <div className="flex gap-6 justify-center">
        <Popover>
          <PopoverTrigger
            render={
              <Button variant="outline" size="sm">
                Start
              </Button>
            }
          />
          <PopoverContent align="start" className="w-40">
            Aligned to start
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger
            render={
              <Button variant="outline" size="sm">
                Center
              </Button>
            }
          />
          <PopoverContent className="w-40">Aligned to center</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger
            render={
              <Button variant="outline" size="sm">
                End
              </Button>
            }
          />
          <PopoverContent align="end" className="w-40">
            Aligned to end
          </PopoverContent>
        </Popover>
      </div>

      <Popover>
        <PopoverTrigger
          render={<Button variant="outline">Open Popover</Button>}
        />
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="width" className="w-1/2">
                Width
              </FieldLabel>
              <Input id="width" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="height" className="w-1/2">
                Height
              </FieldLabel>
              <Input id="height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </div>
  );
}
