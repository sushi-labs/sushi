import type { FC } from "react";
import { EvmChain } from "sushi/chain";
import type { Address } from "sushi/types";
import { ExplorerAddressLink } from "./explorer-link";

interface AddressTable {
  addresses: Record<number, Address>;
}

export const AddressTable: FC<AddressTable> = ({ addresses }) => {
  return (
    <table className="vocs_Table">
      <thead>
        <tr className="vocs_TableRow">
          <th className="vocs_TableHeader">Network</th>
          <th className="vocs_TableHeader">Address</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(addresses).map(([key, value]) => {
          return (
            <tr key={key} className="vocs_TableRow">
              <td className="vocs_TableCell">
                {EvmChain.from(+key)?.name.toUpperCase()}
              </td>
              <td className="vocs_TableCell">
                <ExplorerAddressLink address={value} chainId={+key} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
