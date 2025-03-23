export default function NoContactSelected() {
    return (
        <div
            className="flex flex-col items-center justify-center h-full bg-muted border border-border text-muted-foreground px-6 py-4 rounded-lg shadow-lg"
            role="alert">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mb-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 2H7m0 0h10m-5-8v16"/>
            </svg>
            <p className="text-xl font-semibold">Please select a customer to get started.</p>
        </div>
    )
}