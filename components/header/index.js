import Link from "next/link";
import Image from "next/image";

export const HeaderComponent = ({ data }) => {
  const { header_subtitle, cv_url, email_contact } = data;

  return (
    <div className="flex items-center justify-center gap-8 h-[70vh] bg-[#000814] p-8 flex-col-reverse md:flex-row md:h-auto">
      <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Hey, I'm Jordi Espinoza
            </h1>
            <p>{header_subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
            <Link href={cv_url} passHref={true} target="_blank">
              <button className="btn btn-primary w-full md:w-auto">
                View CV
              </button>
            </Link>
            <Link
              href={`mailto:${email_contact}?subject=Hello%20Jordi%20Espinoza`}
              passHref={true}
            >
              <button className="btn btn-secondary w-full md:w-auto">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
        <Image
          src="https://portfolio-jordi.s3.amazonaws.com/hackmty.jpeg"
          alt="Jordi Espinoza"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
