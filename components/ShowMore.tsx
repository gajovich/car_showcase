'use client';

import { ShowMore } from '@types';
import { updateSearchParams } from '@utils';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';

const ShowMore = ({ isNext, pageNumber }: ShowMore) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 9;
    const newPathname = updateSearchParams('limit', newLimit.toString());

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      <CustomButton
        title="Show more"
        containerStyles="bg-primary-blue rounded-full text-white"
        hendleClick={handleNavigation}
      />
    </div>
  );
};

export default ShowMore;
