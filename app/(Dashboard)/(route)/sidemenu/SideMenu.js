"use client"
import React, { useState } from 'react';
import { Copy, Check, Code, Home, Users, Settings, Calendar, MessageSquare, FolderOpen, Bell, HelpCircle, LogOut } from 'lucide-react';

const CodePreview = ({ code, children }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900">
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-200">Preview</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center rounded-lg border border-gray-700 px-3 py-1 text-sm text-gray-300 hover:bg-gray-800"
            >
              <Code className="mr-1.5 h-4 w-4" />
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>
            <button
              onClick={copyCode}
              className="flex items-center rounded-lg border border-gray-700 px-3 py-1 text-sm text-gray-300 hover:bg-gray-800"
            >
              {copied ? (
                <Check className="mr-1.5 h-4 w-4 text-pink-500" />
              ) : (
                <Copy className="mr-1.5 h-4 w-4" />
              )}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-4">
        <div className="overflow-hidden rounded-lg border border-gray-800">
          {children}
        </div>
      </div>

      {showCode && (
        <div className="border-t border-gray-800 bg-gray-950 p-4">
          <pre className="overflow-x-auto text-sm">
            <code className="text-gray-300">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon: Icon, label, isActive = false, isCompact = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`group flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors
          ${isActive
            ? 'bg-gray-800 text-pink-400'
            : 'text-gray-300 hover:bg-gray-800 hover:text-pink-400'
          }
          ${isCompact ? 'justify-center' : ''}
        `}
      >
        <Icon className={`h-5 w-5 ${isCompact ? '' : 'mr-3'}`} />
        {!isCompact && <span>{label}</span>}
      </a>
    </li>
  );
};

const UserProfile = ({ isCompact = false }) => {
  return (
    <div className={`flex items-center ${isCompact ? 'justify-center p-2' : 'gap-3 p-4'}`}>
      <img
        src="/api/placeholder/32/32"
        alt="User"
        className="h-8 w-8 rounded-full bg-gray-800"
      />
      {!isCompact && (
        <div>
          <p className="text-sm font-medium text-gray-200">Sarah Johnson</p>
          <p className="text-xs text-gray-400">sarah@example.com</p>
        </div>
      )}
    </div>
  );
};

const SidebarDocs = () => {
  return (
    <div className="mx-auto max-w-6xl bg-gray-950 p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-100">SideMenu Components</h1>
        <p className="text-gray-400">A collection of responsive sidebar navigation components for your application.</p>
      </div>

      <div className="space-y-12">
        {/* Full Width Sidebar */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-100">Full Width Sidebar</h2>
          <CodePreview code={`<div className="flex h-screen flex-col justify-between border-e bg-white">
  <div className="px-4 py-6">
    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
      Logo
    </span>

    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          General
        </a>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Teams </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Banned Users
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Calendar
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Billing
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Invoices
        </a>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Account </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Details
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Security
              </a>
            </li>

            <li>
              <form action="#">
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="size-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>`}>
            <div className="h-[600px]">
              <div className="flex h-full flex-col justify-between bg-gray-900">
                <div>
                  <div className="px-4 py-6">
                    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-800 text-xs text-pink-500">
                      DASHBOARD
                    </span>
                  </div>

                  <div className="px-4">
                    <ul className="space-y-1">
                      <MenuItem icon={Home} label="Dashboard" isActive />
                      <MenuItem icon={Users} label="Team" />
                      <MenuItem icon={Calendar} label="Calendar" />
                      <MenuItem icon={MessageSquare} label="Messages" />
                      <MenuItem icon={FolderOpen} label="Projects" />
                      <MenuItem icon={Bell} label="Notifications" />
                    </ul>

                    <div className="my-4 border-t border-gray-800" />

                    <ul className="space-y-1">
                      <MenuItem icon={Settings} label="Settings" />
                      <MenuItem icon={HelpCircle} label="Help Center" />
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-800">
                  <UserProfile />
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* Compact Sidebar */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-100">Compact Sidebar</h2>
          <CodePreview code={`<div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
  <div>
    <div className="inline-flex size-16 items-center justify-center">
      <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
        L
      </span>
    </div>

    <div className="border-t border-gray-100">
      <div className="px-2">
        <div className="py-4">
          <a
            href="#"
            className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span
              className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
            >
              General
            </span>
          </a>
        </div>

        <ul className="space-y-1 border-t border-gray-100 pt-4">
          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Teams
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Billing
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Invoices
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Account
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
    <form action="#">
      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>

        <span
          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
        >
          Logout
        </span>
      </button>
    </form>
  </div>
</div>`}>
            <div className="h-[600px]">
              <div className="flex h-full w-16 flex-col justify-between bg-gray-900">
                <div>
                  <div className="inline-flex size-16 items-center justify-center">
                    <span className="grid size-10 place-content-center rounded-lg bg-gray-800 text-xs text-pink-500">
                      D
                    </span>
                  </div>

                  <div className="px-2">
                    <ul className="space-y-1 py-4">
                      <MenuItem icon={Home} label="Dashboard" isActive isCompact />
                      <MenuItem icon={Users} label="Team" isCompact />
                      <MenuItem icon={Calendar} label="Calendar" isCompact />
                      <MenuItem icon={MessageSquare} label="Messages" isCompact />
                      <MenuItem icon={FolderOpen} label="Projects" isCompact />
                      <MenuItem icon={Bell} label="Notifications" isCompact />
                    </ul>

                    <div className="my-4 border-t border-gray-800" />

                    <ul className="space-y-1">
                      <MenuItem icon={Settings} label="Settings" isCompact />
                      <MenuItem icon={HelpCircle} label="Help" isCompact />
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-800">
                  <UserProfile isCompact />
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* Combined Sidebar */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-100">Combined Sidebar</h2>
          <CodePreview code={`<div className="flex">
  <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
    <div>
      <div className="inline-flex size-16 items-center justify-center">
        <span
          className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
        >
          L
        </span>
      </div>

      <div className="border-t border-gray-100">
        <div className="px-2">
          <div className="py-4">
            <a
              href="#"
              className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                General
              </span>
            </a>
          </div>

          <ul className="space-y-1 border-t border-gray-100 pt-4">
            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Teams
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Billing
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Invoices
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Account
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
      <form action="#">
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>

          <span
            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
          >
            Logout
          </span>
        </button>
      </form>
    </div>
  </div>

  <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
    <div className="px-4 py-6">
      <ul className="mt-14 space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            General
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Teams </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Banned Users
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Billing
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Invoices
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Account </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Security
                </a>
              </li>

              <li>
                <form action="#">
                  <button
                    type="submit"
                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                  >
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</div>`}>
            <div className="h-[600px]">
              <div className="flex h-full">
                <div className="flex h-full w-16 flex-col justify-between bg-gray-900 border-r border-gray-800">
                  <div>
                    <div className="inline-flex size-16 items-center justify-center">
                      <span className="grid size-10 place-content-center rounded-lg bg-gray-800 text-xs text-pink-500">
                        D
                      </span>
                    </div>
                    <div className="px-2">
                      <ul className="space-y-1 py-4">
                        <MenuItem icon={Home} label="Dashboard" isActive isCompact />
                        <MenuItem icon={Users} label="Team" isCompact />
                        <MenuItem icon={Calendar} label="Calendar" isCompact />
                        <MenuItem icon={Bell} label="Notifications" isCompact />
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-800">
                    <UserProfile isCompact />
                  </div>
                </div>

                <div className="flex h-full w-64 flex-col justify-between bg-gray-900">
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-100">Dashboard</h3>
                      <p className="text-sm text-gray-400">Welcome back, Sarah</p>
                    </div>
                    <ul className="space-y-1">
                      <MenuItem icon={Home} label="Overview" isActive />
                      <MenuItem icon={Users} label="Team Members" />
                      <MenuItem icon={FolderOpen} label="Projects" />
                      <MenuItem icon={Calendar} label="Schedule" />
                      <MenuItem icon={MessageSquare} label="Messages" />
                    </ul>

                    <div className="my-4 border-t border-gray-800" />

                    <ul className="space-y-1">
                      <MenuItem icon={Settings} label="Preferences" />
                      <MenuItem icon={HelpCircle} label="Support" />
                      <MenuItem icon={LogOut} label="Log Out" />
                    </ul>
                  </div>

                  <div className="border-t border-gray-800">
                    <UserProfile />
                  </div>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>
      </div>
    </div>
  );
};

export default SidebarDocs;