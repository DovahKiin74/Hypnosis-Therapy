type ProofBarProps = {
  embedded?: boolean;
};

const proofPoints = [
  {
    value: '399+',
    label: 'Clients supported'
  },
  {
    value: '29+',
    label: 'Years in practice'
  },
  {
    value: '87%',
    label: 'Report measurable change'
  },
  {
    value: '1:1',
    label: 'Private, focused support'
  }
];

export function ProofBar({ embedded = false }: ProofBarProps) {
  return (
    <section
      className={`bg-[#17362f] px-5 py-7 text-white sm:px-10 lg:px-[50px] ${embedded ? 'rounded-b-[24px]' : 'rounded-[24px] py-8'}`}
      aria-label="Practice results"
    >
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 ${embedded ? '' : 'overflow-hidden rounded-xl border border-white/15'}`}
      >
        {proofPoints.map((item, index) => (
          <div
            key={item.label}
            className={`
              px-4 py-4 text-center sm:px-7
              ${index < 2 ? 'border-b border-white/15' : ''}
              ${index % 2 === 0 ? 'border-r border-white/15' : ''}
              ${index >= 2 ? 'border-t border-white/15 lg:border-t-0' : ''}
              ${index % 2 === 1 && index < 2 ? 'border-l-0' : ''}
              lg:border-b-0 lg:border-r lg:border-t-0
              lg:last:border-r-0
            `}
          >
            <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#d6e8da] sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs text-white/70 sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}