"use client";
import { sepolia, mainnet, Chain } from "@starknet-react/chains";
import {
  argent,
  braavos,
  jsonRpcProvider,
  StarknetConfig,
  useInjectedConnectors,
  voyager,
} from "@starknet-react/core";

interface StarknetProviderProps {
  children: React.ReactNode;
}

export function StarknetProvider({ children }: StarknetProviderProps) {
  const { connectors: injected } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "always",
  });

  function rpc(chain: Chain) {
    return {
      nodeUrl: "https://rpc.starknet-testnet.lava.build/rpc/v0_9",
    };
  }

  const provider = jsonRpcProvider({ rpc });

  return (
    <StarknetConfig
      connectors={injected}
      chains={[mainnet, sepolia]}
      provider={provider}
      explorer={voyager}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
