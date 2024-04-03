import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./Icon-button";
import { Table } from "./table/Table";
import { TableHeader } from "./table/Table-header";
import { TableCell } from "./table/Table-cell";
import { TableRow } from "./table/Table-row";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="text-2xl font-bold">Participantes</div>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />

          <input
            type="text"
            placeholder="Buscar participante"
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
          />
        </div>
      </div>

      <Table>
        <thead className="border-b border-white/10">
          <tr>
            <TableHeader
              style={{ width: 48 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            >
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <TableRow key={i} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10"
                  />
                </TableCell>
                <TableCell>123587</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Alan Gonçalves
                    </span>
                    <span>lnjnr9215@gmail.com</span>
                  </div>
                </TableCell>
                <TableCell>7 Dias atrás</TableCell>
                <TableCell>3 Dias atrás</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 228 items</TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
