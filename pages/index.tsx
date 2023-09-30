import React from 'react';
import { trpc } from '../utils/trpc';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IndexPage() {
  const { data: features } = trpc.features.listFeatures.useQuery();

  if (!features) return <p>... Loading ...</p>;

  return (
    <div className='p-2'>
      <header className='flex justify-between p-3'>
        <h1 className='text-2xl font-black'>NC Marketface</h1>
        <button
          className={`
          bg-black
            hover:bg-indigo-600
            p-2
            rounded
            text-white
            w-fit h-fit
        `}
        >
          View Basket
          <FontAwesomeIcon icon={faBasketShopping} className='pl-2' />
        </button>
      </header>
      <p className='p-3'>
        A virtual market face place for all those cool features you never
        dreamed of having.
      </p>
      <section>
        <h2 className='p-3 font-black text-lg'>Features</h2>
        <ul className='flex flex-wrap'>
          {features.map((feature) => {
            return (
              <section
                key={feature.id}
                className={`
                w-[40rem] p-2 m-2
                border-black-300 border-2
                rounded
              `}
              >
                <h3 className='font-bold pb-2'>{feature.featureName}</h3>
                <img src={feature.imgUrl} className='h-[6.25rem]' />
                <p className='text-xs py-2'>{feature.description}</p>
                <button
                  className={`
                w-fit h-fit
              bg-indigo-600
                hover:bg-black
                p-2
                rounded
              text-white`}
                >
                  Add to Basket
                </button>
              </section>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
