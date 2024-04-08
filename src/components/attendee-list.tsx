import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { IconButton } from "./Icon-button";
import { Table } from "./table/Table";
import { TableHeader } from "./table/Table-header";
import { TableCell } from "./table/Table-cell";
import { TableRow } from "./table/Table-row";
import { ChangeEvent, useEffect, useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface Attendee {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}

export function AttendeeList() {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  const [total, setTotal] = useState(0)
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    fetch(
      `http://localhost:3333/events/17ff50de-fafc-4dc3-92ff-39066078e802/attendees?pageIndex=${page - 1}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data.attendees);
        setTotal(data.total)
      });
  }, [page]);

  function onSearchChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  function goToNextPage() {
    setPage(page + 1);
  }

  function goToPreviusPage() {
    setPage(page - 1);
  }

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
            onChange={onSearchChanged}
          />
        </div>

        {searchInput}
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
          {attendees.map((attende) => {
            return (
              <TableRow
                key={attende.id}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10"
                  />
                </TableCell>
                <TableCell>{attende.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attende.name}
                    </span>
                    <span>{attende.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attende.createdAt)}</TableCell>
                <TableCell>
                  {attende.checkedInAt === null
                    ? <span className="text-zinc-400">Não fez check-in</span>
                    : dayjs().to(attende.checkedInAt)}
                </TableCell>
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
            <TableCell colSpan={3}>
              Mostrando {attendees.length} de {total} items
            </TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviusPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
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
