import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CapabilityTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export default function CapabilityTable({
  headers,
  rows,
  caption,
}: CapabilityTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        {caption && (
          <caption className="mb-4 text-sm text-muted-foreground">
            {caption}
          </caption>
        )}
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className="bg-muted/50 font-semibold text-foreground"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
