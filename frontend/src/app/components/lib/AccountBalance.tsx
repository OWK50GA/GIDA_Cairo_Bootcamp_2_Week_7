import { useReadContract } from "@starknet-react/core";
import { ERC20ABI } from "../../../../public/abi/tokenAbi";
import { ETH_SEPOLIA, STRK_SEPOLIA } from "@/app/components/internal/helpers/constant";
import { formatCurrency } from "../internal/helpers";

type Props = {
  address: string;
  heading?: boolean;
};

function AccountBalance({ address, heading = true }: Props) {
  const { data: eth, isLoading: ethLoading } = useReadContract({
    address: ETH_SEPOLIA as `0x${string}`,
    abi: ERC20ABI,
    functionName: "balance_of",
    args: [address!],
    watch: true,
  });

  const { data: strk, isLoading: strkLoading } = useReadContract({
    address: STRK_SEPOLIA as `0x${string}`,
    abi: ERC20ABI,
    functionName: "balance_of",
    args: [address!],
    watch: true,
  });

  // @ts-ignore
  const ethBalance = formatCurrency(eth?.balance.low.toString());
  // @ts-ignore
  const strkBalance = formatCurrency(strk?.balance?.low.toString());

  return (
    <div className="p-4 text-sm">
      {heading && <h3 className="mb-4 text-md">Assets</h3>}

      <div className="flex flex-col gap-4 text-[--headings]">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full md:h-12 md:w-12">
              <img className="w-full" src="/assets/eth.svg" alt="" />
            </div>
            <div>
              <p className="mb-2 text-md">ETH</p>
              <p>Ethereum</p>
            </div>
          </div>
          <div className="mr-4 flex items-center">
            <p className="">{Number(ethBalance).toFixed(3)}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full md:h-12 md:w-12">
              <img className="w-full" src="/assets/strk.svg" alt="" />
            </div>
            <div>
              <p className="mb-2 text-md">STRK</p>
              <p>Starknet token</p>
            </div>
          </div>
          <div className="mr-4 flex items-center">
            <p className="">{Number(strkBalance).toFixed(3)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountBalance;
