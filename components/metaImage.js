import Image from 'next/image';

function MetaImage() {
  return (
    <div>
      <Image src="/logo.png" alt="Logo" width={300} height={200} />
    </div>
  );
}

export default MetaImage;
