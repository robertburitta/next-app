import type { NextPage } from 'next';
import React from 'react';

export type PageWithLayout = NextPage & { getLayout: (page: React.ReactNode) => React.ReactNode; };