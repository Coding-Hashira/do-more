import SigninButtons from "@/components/Signin/SigninButtons";

type Props = {};

const css = `
.my-element {
    background-image: url(/login-page.png);
    height: 100vh;
}

`;


const SigninPage = () => {
    return (
        <>
            <div className="bg-cover flex justify-center items-center my-element">
                <style>{css}</style>

                <div className="w-[382.864px] h-[418px] bg-[#24284F] shadow-sm flex flex-col justify-center items-center space-y-4">
                    <SigninButtons />
                </div>
            </div>
        </>
    )
}

export default SigninPage