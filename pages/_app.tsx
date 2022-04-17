import '../styles/globals.css'
import 'antd/dist/antd.dark.css'
import type { AppProps } from 'next/app'
import { WalletProvider } from '@solana/wallet-adapter-react'
import { getWalletAdapters } from '@solana/wallet-adapter-wallets'
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
import { EnvironmentProvider } from 'providers/EnvironmentProvider'
import { WalletIdentityProvider } from '@cardinal/namespaces-components'
import { TokenAccountsProvider } from 'providers/TokenDataProvider'
import { StakedTokenDataProvider } from 'providers/StakedTokenDataProvider'
import { TokenListProvider } from 'providers/TokenListProvider'

require('@solana/wallet-adapter-react-ui/styles.css')

const App = ({ Component, pageProps }: AppProps) => (
  <EnvironmentProvider>
    <WalletProvider wallets={getWalletAdapters()}>
      <WalletIdentityProvider>
        <WalletModalProvider>
          <TokenListProvider>
            <TokenAccountsProvider>
              <StakedTokenDataProvider>
                <Component {...pageProps} />
              </StakedTokenDataProvider>
            </TokenAccountsProvider>
          </TokenListProvider>
        </WalletModalProvider>
      </WalletIdentityProvider>
    </WalletProvider>
  </EnvironmentProvider>
)

export default App
