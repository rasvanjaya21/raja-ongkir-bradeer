import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

export default function DialogModal({isOpen, closeModal, title, firstDescription, secondDescription}) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-20" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0  bg-white/40 backdrop-blur-[10px]" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 mx-6 text-left align-middle shadow-primary transition-all">
								<Dialog.Title
									as="h3"
									className="text-lg font-bold leading-6 text-primary"
								>
									{title}
								</Dialog.Title>
								<div className="border-t-2 my-2 border-dashed"></div>

								<div className="text-[120px] text-center">😥</div>
								<div className="border-t-2 my-2 border-dashed"></div>

								<div className="mt-2">
									<p className="text-xs text-gray-500">{firstDescription}</p>
								</div>
								<div className="border-t-2 my-2 border-dashed"></div>
								<div className="mt-2">
									<p className="text-xs text-gray-500">{secondDescription}</p>
								</div>
								<div className="border-t-2 my-2 border-dashed"></div>

								<div className="mt-4">
									<Image alt="hints" src="/hint.gif" width={600} height={36} />
								</div>

								<div className="mt-4">
									<button
										type="button"
										className="inline-flex justify-center rounded-md w-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-primary"
										onClick={(event) => {
											closeModal();
										}}
									>
										Kembali
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
