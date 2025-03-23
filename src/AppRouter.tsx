import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import {AuthLayout} from "@/auth/layout/AuthLayout.tsx";
import {LoginPage} from "@/auth/pages/LoginPage.tsx";
import {RegisterPage} from "@/auth/pages/RegisterPage.tsx";
import ChatPage from "@/chat/pages/ChatPage.tsx";
import {lazy, Suspense} from "react";
import {sleep} from "@/lib/sleep.ts";

const ChatLayout = lazy(async () => {
    await sleep(1500);
    return import("./chat/layout/ChatLayout.tsx")
});

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth' element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path='/auth/register' element={ <RegisterPage />} />
                    {/*<Route path="register" element={<Register />} />*/}
                </Route>
                <Route path='/chat' element={
                    <Suspense
                        fallback={<div className="flex h-screen items-center justify-center w-full bg-background">
                            <div
                                className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                        </div>}
                    >
                        <ChatLayout />
                    </Suspense>
                }>
                    <Route index element={<ChatPage />} />
                </Route>


                <Route path='/' element={ <Navigate to='/auth' />} />
                <Route path='*' element={ <Navigate to='/auth' />} />

            </Routes>
        </BrowserRouter>
    )
}