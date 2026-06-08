'use client';

import { useState } from 'react';

import {
  Checkbox,
  Field,
  FieldGroup,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldSet,
  FieldLegend,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { tableData } from '@/bd';

export default function Page() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set(['1']));
  const selectAll = selectedRows.size === tableData.length;
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };
  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      <FieldGroup className="mx-auto w-56">
        <Field orientation="horizontal" data-invalid>
          <Checkbox
            id="terms-checkbox-invalid"
            name="terms-checkbox-invalid"
            aria-invalid
          />
          <FieldLabel htmlFor="terms-checkbox-invalid">
            Accept terms and conditions
          </FieldLabel>
        </Field>
      </FieldGroup>

      <FieldGroup className="mx-auto w-56">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <FieldLabel htmlFor="terms-checkbox-basic">
            Accept terms and conditions
          </FieldLabel>
        </Field>
      </FieldGroup>

      <FieldGroup className="mx-auto w-72">
        <Field orientation="horizontal">
          <Checkbox
            id="terms-checkbox-desc"
            name="terms-checkbox-desc"
            defaultChecked
          />
          <FieldContent>
            <FieldLabel htmlFor="terms-checkbox-desc">
              Accept terms and conditions
            </FieldLabel>
            <FieldDescription>
              By clicking this checkbox, you agree to the terms and conditions.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>

      <FieldGroup className="mx-auto w-56">
        <Field orientation="horizontal" data-disabled>
          <Checkbox
            id="toggle-checkbox-disabled"
            name="toggle-checkbox-disabled"
            disabled
          />
          <FieldLabel htmlFor="toggle-checkbox-disabled">
            Enable notifications
          </FieldLabel>
        </Field>
      </FieldGroup>

      <FieldSet>
        <FieldLegend variant="label">
          Show these items on the desktop:
        </FieldLegend>
        <FieldDescription>
          Select the items you want to show on the desktop.
        </FieldDescription>
        <FieldGroup className="gap-3">
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-9k2-hard-disks-ljj-checkbox"
              name="finder-pref-9k2-hard-disks-ljj-checkbox"
              defaultChecked
            />
            <FieldLabel
              htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
              className="font-normal"
            >
              Hard disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-9k2-external-disks-1yg-checkbox"
              name="finder-pref-9k2-external-disks-1yg-checkbox"
              defaultChecked
            />
            <FieldLabel
              htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
              className="font-normal"
            >
              External disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-9k2-cds-dvds-fzt-checkbox"
              name="finder-pref-9k2-cds-dvds-fzt-checkbox"
            />
            <FieldLabel
              htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
              className="font-normal"
            >
              CDs, DVDs, and iPods
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-9k2-connected-servers-6l2-checkbox"
              name="finder-pref-9k2-connected-servers-6l2-checkbox"
            />
            <FieldLabel
              htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
              className="font-normal"
            >
              Connected servers
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                id="select-all-checkbox"
                name="select-all-checkbox"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map(({ id, name, email, role }) => (
            <TableRow
              key={id}
              data-state={selectedRows.has(id) ? 'selected' : undefined}
            >
              <TableCell>
                <Checkbox
                  id={`row-$.id}-checkbox`}
                  name={`row-${id}-checkbox`}
                  checked={selectedRows.has(id)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(id, checked === true)
                  }
                />
              </TableCell>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
