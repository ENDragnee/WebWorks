import Image from 'next/image';
import { RrTest } from '@/components/rr-test';

export default function Home() {
  return (
    <div>
      <RrTest /> {/* Component names should start with an uppercase letter */}
    </div>
  );
}
