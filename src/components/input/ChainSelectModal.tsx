import { mainnetChains, testnetChains } from '../../consts/chains';
import { getChainDisplayName } from '../../utils/chains';
import { ChainIcon } from '../icons/ChainIcon';
import { Modal } from '../layout/Modal';

export function ChainSelectModal({
  isOpen,
  close,
  onSelect,
}: {
  isOpen: boolean;
  close: () => void;
  onSelect: (chainId: number) => void;
}) {
  const onSelectChain = (chainId: number) => {
    return () => {
      onSelect(chainId);
      close();
    };
  };

  return (
    <Modal isOpen={isOpen} title="Send Tokens" close={close}>
      <div className="mt-1 flex justify-between">
        <div className="flex flex-col space-y-0.5 relative -left-2">
          <h4 className="py-1.5 px-2 text-sm text-gray-500 uppercase">Mainnet</h4>
          {mainnetChains.map((c) => (
            <button
              key={c.name}
              className="py-1.5 px-2 text-sm flex items-center rounded hover:bg-gray-100 active:bg-gray-200 transition-all duration-200"
              onClick={onSelectChain(c.id)}
            >
              <ChainIcon chainId={c.id} size={16} background={false} />
              <span className="ml-2">{getChainDisplayName(c.id, true)}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-0.5 pr-3">
          <h4 className="py-1.5 px-2 text-sm text-gray-500 uppercase">Testnet</h4>
          {testnetChains.map((c) => (
            <button
              key={c.name}
              className="py-1.5 px-2 text-sm flex items-center rounded hover:bg-gray-100 active:bg-gray-200 transition-all duration-200"
              onClick={onSelectChain(c.id)}
            >
              <ChainIcon chainId={c.id} size={16} background={false} />
              <span className="ml-2">{getChainDisplayName(c.id, true)}</span>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
