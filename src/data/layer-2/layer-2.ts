import { StaticImageData } from "next/image"

import ArbitrumLogo from "@/public/images/layer-2/arbitrum.png"
import BaseLogo from "@/public/images/layer-2/base.png"
import BlastImage from "@/public/images/layer-2/blast.png"
import LineaLogo from "@/public/images/layer-2/linea.png"
import ModeLogo from "@/public/images/layer-2/mode.png"
import OptimismLogo from "@/public/images/layer-2/optimism.png"
import ScrollLogo from "@/public/images/layer-2/scroll.png"
import StarknetLogo from "@/public/images/layer-2/starknet.png"
import ZkSyncEraLogo from "@/public/images/layer-2/zksyncEra.jpg"

export interface Rollup {
  name: string
  logo: StaticImageData
  networkType: "optimistic" | "zk"
  website: string
  applicationsLink: string
  blockExplorerLink: string
  bridgeLink: string
  l2BeatLink: string
  growThePieLink: string
  feeToken: string[]
}

export type Rollups = Rollup[]

export const layer2Data: Rollups = [
  {
    name: "Arbitrum One",
    logo: ArbitrumLogo,
    networkType: "optimistic",
    website: "https://arbitrum.io/rollup",
    applicationsLink: "https://portal.arbitrum.io/projects",
    blockExplorerLink: "https://arbiscan.io/",
    bridgeLink: "https://bridge.arbitrum.io/",
    l2BeatLink: "https://l2beat.com/scaling/projects/arbitrum",
    growThePieLink: "https://www.growthepie.com/chains/arbitrum",
    feeToken: ["ETH"],
  },
  {
    name: "Base",
    logo: BaseLogo,
    networkType: "optimistic",
    website: "https://base.org/",
    applicationsLink: "https://base.org/ecosystem",
    blockExplorerLink: "https://basescan.org/",
    bridgeLink: "https://bridge.base.org/deposit",
    l2BeatLink: "https://l2beat.com/scaling/projects/base",
    growThePieLink: "https://www.growthepie.com/chains/base",
    feeToken: ["ETH"],
  },
  {
    name: "Optimism",
    logo: OptimismLogo,
    networkType: "optimistic",
    website: "https://optimism.io/",
    applicationsLink: "https://optimism.io/apps",
    blockExplorerLink: "https://optimistic.etherscan.io/",
    bridgeLink: "https://app.optimism.io/",
    l2BeatLink: "https://l2beat.com/scaling/projects/optimism",
    growThePieLink: "https://www.growthepie.com/chains/optimism",
    feeToken: ["ETH"],
  },
  {
    name: "Blast",
    logo: BlastImage,
    networkType: "optimistic",
    website: "https://blast.io/en",
    applicationsLink: "https://www.ethereum-ecosystem.com/apps?filters=blast",
    blockExplorerLink: "https://blastscan.io/",
    bridgeLink: "https://blast.io/en/bridge",
    l2BeatLink: "https://l2beat.com/scaling/projects/blast",
    growThePieLink: "https://www.growthepie.xyz/chains/blast",
    feeToken: ["ETH"],
  },
  {
    name: "ZKSync Era",
    logo: ZkSyncEraLogo,
    networkType: "zk",
    website: "https://zksync.io/",
    applicationsLink: "https://zksync.io/ecosystem",
    blockExplorerLink: "https://explorer.zksync.io/",
    bridgeLink: "https://portal.zksync.io/bridge/",
    l2BeatLink: "https://l2beat.com/scaling/projects/zksync-era",
    growThePieLink: "https://www.growthepie.xyz/chains/zksync-era",
    feeToken: ["ETH"],
  },
  {
    name: "Linea",
    logo: LineaLogo,
    networkType: "zk",
    website: "https://linea.build/",
    applicationsLink: "https://linea.build/apps",
    blockExplorerLink: "https://lineascan.build/",
    bridgeLink: "https://bridge.linea.build/",
    l2BeatLink: "https://l2beat.com/scaling/projects/linea",
    growThePieLink: "https://www.growthepie.xyz/chains/linea",
    feeToken: ["ETH"],
  },
  {
    name: "Scroll",
    logo: ScrollLogo,
    networkType: "zk",
    website: "https://scroll.io/",
    applicationsLink: "https://scroll.io/ecosystem",
    blockExplorerLink: "https://scrollscan.com",
    bridgeLink: "https://scroll.io/bridge",
    l2BeatLink: "https://l2beat.com/scaling/projects/scroll",
    growThePieLink: "https://www.growthepie.xyz/chains/scroll",
    feeToken: ["ETH"],
  },
  {
    name: "Starknet",
    logo: StarknetLogo,
    networkType: "zk",
    website: "https://starknet.io",
    applicationsLink: "https://www.starknet-ecosystem.com/",
    blockExplorerLink: "https://starkscan.co/",
    bridgeLink: "https://starkgate.starknet.io/",
    l2BeatLink: "https://l2beat.com/scaling/projects/starknet",
    growThePieLink: "https://www.growthepie.xyz/chains/starknet",
    feeToken: ["ETH", "STRK"],
  },
  {
    name: "Mode",
    logo: ModeLogo,
    networkType: "optimistic",
    website: "https://mode.network/",
    applicationsLink: "https://mode.network/ecosystem",
    blockExplorerLink: "https://explorer.mode.network/",
    bridgeLink: "https://app.mode.network/",
    l2BeatLink: "https://l2beat.com/scaling/projects/mode",
    growThePieLink: "https://www.growthepie.xyz/chains/mode",
    feeToken: ["ETH"],
  },
]
