'use client';

export default function Loading({classname}: {classname?: string}) {
  return (
    <section className={"flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-8 w-fit mx-auto my-4 " + classname}>
      <div className="loader">
        <div className="cell d-0"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>

        <div className="cell d-2"></div>
        <div className="cell d-3"></div>

        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
      </div>
    </section>
  );
}
