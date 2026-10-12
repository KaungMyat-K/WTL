import type {
  NewsListApiResponse,
  NewsData,
  NewsDetailData,
  NetworkData,
  JobListApiResponse,
  JobData,
  JobDetailData,
} from "../types/index1";
import axiosClient from "./axiosClient";

const fetchNews = async (): Promise<NewsData[]> => {
  const { data } = await axiosClient.get<NewsListApiResponse>("/public/blogs", {
    timeout: 60000,
  });

  return data.content || [];
};

export const fetchNewsQuery = () => ({
  queryKey: ["news"],
  queryFn: fetchNews,
});

const fetchOneNews = async (id: string) => {
  const { data } = await axiosClient.get<NewsDetailData>(`/public/blogs/${id}`);
  return data;
};

export const fetchOneNewsQuery = (id: string) => ({
  queryKey: ["newsDetail", id],
  queryFn: () => fetchOneNews(id),
  enabled: Boolean(id),
});

const fetchNetworks = async (): Promise<NetworkData[]> => {
  const { data } = await axiosClient.get<NetworkData[]>("/public/networks", {
    timeout: 60000,
  });
  return data || [];
};

export const fetchNetworksQuery = () => ({
  queryKey: ["networks"],
  queryFn: fetchNetworks,
});

const fetchJobs = async (): Promise<JobData[]> => {
  const { data } = await axiosClient.get<JobListApiResponse>("/public/jobs", {
    timeout: 60000,
  });

  return data.content || [];
};

export const fetchJobsQuery = () => ({
  queryKey: ["jobs"],
  queryFn: fetchJobs,
});

const fetchOneJob = async (id: string) => {
  const { data } = await axiosClient.get<JobDetailData>(`/public/jobs/${id}`);
  return data;
};

export const fetchOneJobQuery = (id: string) => ({
  queryKey: ["jobDetail", id],
  queryFn: () => fetchOneJob(id),
  enabled: Boolean(id),
});
